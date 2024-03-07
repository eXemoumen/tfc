import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 import pic from  "../assets/logo.png";
export function ProfileCard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={pic} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
  );
}
