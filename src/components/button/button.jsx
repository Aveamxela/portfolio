export default function Button(props) {
    return (
        <button
            className="button"
            type={props.type}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
        >
            {props.text}
        </button>
    );
}
