import { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Loader from "../loader";

interface IItemCardProps {}

const ItemCard: FunctionComponent<IItemCardProps> = () => {
  const salesInfo = useAppSelector((state: RootState) => state.sales);

  if (salesInfo.status !== "idle") {
    return <Loader />;
  }

  return (
    <Card sx={{ maxWidth: 345, padding: "1rem" }}>
      <CardMedia
        component="img"
        height="140"
        image={salesInfo.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {salesInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {salesInfo.subtitle}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1}>
        {salesInfo.tags.map((tag) => (
          <Chip label={tag} variant="outlined" />
        ))}
      </Stack>
    </Card>
  );
};

export default ItemCard;
