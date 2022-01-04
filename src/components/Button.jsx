const Button = ({ title, action }) => {
    return (
        <div>
            <button onClick={action}>{title}</button>
        </div>
    );
}

export default Button;