import React, { Component } from 'react';
import styles from './ShowPackagesDetails.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export class ShowPackagesDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            active:false
        }
        this.makeItActive = this.makeItActive.bind(this);
    }
    makeItActive=()=>{
        this.setState(prevState => ({
            active: !prevState.active
          }));
    }

    render() {
        const style = this.state.active ? { border: '2px solid rgba(137, 43, 226, 0.931)' } : {};
        return (
            <>
                <h2 className={styles['title']}>Choose package or individual items  </h2>

                  <Card className={styles['card']} onClick={this.makeItActive} style={style}>
                      <CardActionArea>
                          <CardContent>
                             <div className={styles['package-title']}>
                                LAWN TEK
                             </div>
                                <div className={styles['price']}>
                                $200.00/mo
                                </div>
                                <hr />
                                <ul className={styles['list']}>
                                    <li><i class={`fa fa-check-circle ${styles['tick-circle']}`} aria-hidden="true"></i> Guarantee Profitability </li>
                                    
                                    <li><i class={`fa fa-check-circle ${styles['tick-circle']}`} aria-hidden="true"></i> Fifth</li>
                                    <li><i class={`fa fa-check-circle ${styles['tick-circle']}`} aria-hidden="true"></i> Fifth</li>
                                    <li><i class={`fa fa-check-circle ${styles['tick-circle']}`} aria-hidden="true"></i> Fifth</li>
                                   
                                </ul>
                          </CardContent>
                      </CardActionArea>
                  </Card>
                  

            </>
        )
    }
}

export default ShowPackagesDetails
