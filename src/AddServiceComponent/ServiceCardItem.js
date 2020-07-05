import React from "react";
import {
  Checkbox,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

export default function CardItem() {
  const [selected, setSelected] = React.useState(false);
  return (
    <Grid item md={3}>
    <div style={ !selected ? { position: "relative" } : {position: 'relative', border: '2px solid black'}}>

      <Card>
        <CardContent>
          <Typography
            color="textSecondary"
            // gutterBottom
            variant="h6"
            style={{ textAlign: "center", fontSize: '14px' }}
          >
            First Service
          </Typography>
          <Typography
            color="textSecondary"
            // gutterBottom
            variant="h6"
            style={{ textAlign: "center", fontSize: '14px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ratione ab sit ea sunt facilis eaque, 
          </Typography>
          <div style={{marginTop: '10px'}}> 
              <div>Price: $18/Sq.Feet</div>
              <div>Min Price: $30</div>
          </div>
        </CardContent>
      </Card>
    </div>
    </Grid>
  );
}
