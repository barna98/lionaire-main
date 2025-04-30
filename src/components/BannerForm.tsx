import BannerFormIndicatorBg from './icons/banner/BannerFormIndicatorBg.tsx';
import Input from './form/Input.tsx';
import BannerFormBg from './icons/banner/BannerFormBg.tsx';
import BannerFormMobileBg from './icons/banner/BannerFormMobileBg.tsx';
import BannerFormIndicatorMobileBg from './icons/banner/BannerFormIndicatorMobileBg.tsx';

interface PropsType {
    setWalletOpen: (v: boolean) => void;
}

export default function BannerForm({ setWalletOpen }: PropsType) {
    return (
        <div className="banner-form">
            <BannerFormBg />
            <BannerFormMobileBg />
            <h4 className="banner-form-title">PRESALE</h4>
            <h2 className="banner-form-coming-soon">COMING SOON</h2>
            <p className="banner-form-raised">Raised: $12,123,534.43</p>
            <span className="banner-form-progress">
                <BannerFormIndicatorBg />
                <BannerFormIndicatorMobileBg />
            </span>
            <div className="banner-form-prices">
                <p className="banner-form-price">Current Price: $0.007</p>
                <p className="banner-form-price">Next Price: $0.008</p>
            </div>
            <div className="banner-form-balance">
                <span>Your Balance</span>
                <p className="banner-form-balance-panel">0.000</p>
            </div>
            <div className="banner-form-selector">
                <span className="banner-form-selector-title">Payment method</span>
                <div className="banner-form-selector-options">
                    <label className="banner-form-selector-option">
                        <span className="banner-form-selector-option-title">ETH</span>
                        <input type="radio" name="payment" />
                    </label>
                    <label className="banner-form-selector-option">
                        <span className="banner-form-selector-option-title">USDT</span>
                        <input type="radio" name="payment" />
                    </label>
                    <label className="banner-form-selector-option">
                        <span className="banner-form-selector-option-title">SOL</span>
                        <input type="radio" name="payment" />
                    </label>
                    <label className="banner-form-selector-option">
                        <span className="banner-form-selector-option-title">BNB</span>
                        <input type="radio" name="payment" />
                    </label>
                </div>
            </div>
            <div className="banner-form-amounts">
                <Input label="Pay with ETH" type="number" />
                <Input label="Receive LNR" type="number" />
            </div>
            <div className="banner-form-referral">
                <Input label="Referral code" type="number" />
            </div>
            <button className="banner-form-button" onClick={() => setWalletOpen(true)}>
                Connect Wallet
            </button>
        </div>
    );
}