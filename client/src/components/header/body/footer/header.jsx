export default function Header() {
    const menu = (
        <svg className="menu" fill="#0B60A9" width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h7v7H0V0zm2 2v3h3V2H2zM0 9h7v7H0V9zm9-9h7v7H9V0zm2 2v3h3V2h-3zM9 9h7v7H9V9zm2 2v3h3v-3h-3zm-9 0v3h3v-3H2z" fill-rule="evenodd" />
        </svg>
    );

    return (
        <div className="header">
            {menu}
            <span className="logo">AE <br /> LOGSAVERS</span>
        </div>
    );
};