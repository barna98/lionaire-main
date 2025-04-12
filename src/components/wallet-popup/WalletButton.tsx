interface PropsType {
    title: string;
    icon: string;
}

export default function WalletButton({ title, icon }: PropsType) {
    return (
        <button className="wallet-popup-button">
            {title}
            <img src={icon} alt="icon" />
        </button>
    );
}