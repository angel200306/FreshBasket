function encodeBase64Unicode(str) {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            (match, p1) => String.fromCharCode("0x" + p1)
        )
    );
}

function ShareButton({ products }) {
    const share = () => {
        const json = JSON.stringify(products);

        const encoded = encodeBase64Unicode(json);

        const url = window.location.origin + "?list=" + encoded;

        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    };

    return (
        <button onClick={share}>
            Share list
        </button>
    );
}

export default ShareButton;