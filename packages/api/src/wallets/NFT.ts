import Wallet from '../services/Wallet';

export default class DIDWallet extends Wallet {
  async getCurrentNfts(walletId: number) {
    return this.command('nft_get_current_nfts', {
      walletId,
    });
  }

  async transferNft(
    walletId: number,
    nftCoinInfo: any,
    newDid: string,
    newDidInnerHash: string,
    tradePrice: number
  ) {
    return this.command('nft_transfer_nft', {
      walletId,
      nftCoinInfo,
      newDid,
      newDidInnerHash,
      tradePrice,
    });
  }

  async receiveNft(walletId: number, spendBundle: any, fee: number) {
    return this.command('nft_receive_nft', {
      walletId,
      spendBundle,
      fee,
    });
  }
}
