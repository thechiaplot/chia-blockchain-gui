export default async function getRemoteFileContent(
  url: string,
  maxSize?: number,
): Promise<string> {
  const ipcRenderer = (window as any).ipcRenderer;
  const requestOptions = {
    url,
    maxSize,
  };

  const {
    data: rawData,
    statusCode,
    contentType,
    error,
  } = await ipcRenderer?.invoke('fetchBinaryContent', requestOptions);

  if (error) {
    throw error;
  }

  if (statusCode !== 200) {
    throw new Error(error.message || `Failed to fetch content from ${url}`);
  }

  let data = rawData;
  console.log('contentType');
  console.log(contentType);
  if (contentType === 'text/plain; charset=utf-8') {
    console.log('text/plain; charset=utf-8');
    const converted = Buffer.from(data, 'latin1').toString('utf8');
    console.log('converted:');
    console.log(converted);
    data = converted;
    //   //   const buffer = Buffer.from(rawData, 'latin1');
    //   //   data = buffer.toString('utf8');
  }

  return data;
}
