import React, {InputHTMLAttributes} from 'react';
import '../../assets/global.css';
import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Input: React.FunctionComponent<InputProps> = ({label, name, ...rest}) => {
  return (
    <div className="principal">
        <label htmlFor={name}>{label}</label>
        <br/>
        <input type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;