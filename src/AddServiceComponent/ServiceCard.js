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

export default function ServiceCard() {
  const [selected, setSelected] = React.useState(false);
  return (
    <Grid item xs={12} sm={6}>
    <div style={ !selected ? { position: "relative" } : {position: 'relative', border: '2px solid black'}}>
      { selected ?
          <div style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: 'black', color: 'white', height: '25px', width: '25px', borderRadius: '50px' }}>
          <CheckIcon />
      </div> :
      null}
      <Card>
        <CardContent>
          <Typography
            color="textSecondary"
            // gutterBottom
            // variant="h6"
            style={{ textAlign: "center", fontSize: '14px' }}
          >
            Moing Service
          </Typography>
          <TextField
            id="standard-number"
            label="Quantity"
            type="number"
            fullWidth
          />
          <div style={{ textAlign: "center" }}>
            <Button
              style={{ marginTop: "10px" }}
              type="submit"
              variant="outlined"
              onClick={(e) => setSelected(!selected)}
              color="primary"
            >
              {!selected ?  'Select' :  'Remove'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </Grid>
  );
}
