
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LInputLogin = ({ id, placeHolder, onChange, iconDefinition }) => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          placeholder={placeHolder}
        />
        <div className="input-group-append">
          <span className="input-group-text" id={id}>
            <span>
              <FontAwesomeIcon icon={iconDefinition} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
export default LInputLogin;
