import React from "react";
import "./ReportScreen.css";
import LineChart from "../../screens/eShopScreens/LineChart";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
const ReportScreen = () => {
  return (
    <div className="reportScreen p-2 mt-2">
      <div className="reportScreenInfoBoxs">
        <Card className="reportScreenInfoBox bg-warning">
          <CardContent>
            <h4 className="">Total Puchases</h4>
            <h2 className="text-light">9393 $</h2>
            <Typography className="" color="textSecondary">
              Since 2021
            </Typography>
          </CardContent>
        </Card>
        <Card className="reportScreenInfoBox bg-info">
          <CardContent>
            <h4 className="">Total Sales</h4>
            <h2 className="text-light">9393 $</h2>
            <Typography className="" color="textSecondary">
              Since 2021
            </Typography>
          </CardContent>
        </Card>
        <Card className="reportScreenInfoBox bg-warning">
          <CardContent>
            <h4 className="">Total Capital</h4>
            <h2 className="text-info">9393 $</h2>
            <Typography className="" color="textSecondary">
              Since 2021
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Card className="reportScreen_right mt-3">
        <CardContent>
          <h3>dd</h3>
          <LineChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportScreen;
