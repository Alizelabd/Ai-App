function InputsC (props) {
    return (
        <>
            <div className="input-group mb-3">
                    <button className="btn btn-dark" type="button" id="button-addon2">{props.btnName}</button>
                <input type="text" className="form-control" placeholder={props.place} aria-label={props.place} aria-describedby="button-addon2" />
            </div>
        </>
    )
}
export default InputsC;