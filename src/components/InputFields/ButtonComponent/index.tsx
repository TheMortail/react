import { FC } from 'react';

import { ButtonType } from './types';
import classes from './ButtonComponent.module.css'
const PontButtonComponent: FC<ButtonType> = (props) => {
    return <button className={classes.PontButton} {...props}></button>;
};

export default PontButtonComponent;