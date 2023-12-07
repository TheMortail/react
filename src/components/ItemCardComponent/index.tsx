import { FC } from 'react';

import { CardProps } from './types';
import classes from './ItemCardComponent.module.css';

const ItemCardComponent: FC<CardProps> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.cardContent}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ItemCardComponent;
