import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx=classNames.bind(styles);

//전달받은 className,onClick등 값들이 rest 안에 들어 있습니다. 
//JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어 줍니다.
const Div=({children,...rest})=><div {...rest}>{children}</div>

const Button=({children,to,onClick,disabled,theme='default'})=>{
    //to 값이 존재하면 Link 컴포넌트를 사용,그렇지 않으면 Div 컴포넌트를 사용
    //비활성화 되어 있는 버튼일 때도 Div 컴포넌트를 사용 
    const Element=(to&&!disabled)?Link:Div;

    //비활성화 되면 onClick은 실행되지 않습니다. 
    //disabled 값이 true 가 되면 className에 disabled 를 추가합니다.

    return (
        <Element
            to={to}
            className={cx('button',theme,{disabled})}
            onClick={disabled?()=>null:onClick}>
            {children}
        </Element>
    )
};
export default Button;