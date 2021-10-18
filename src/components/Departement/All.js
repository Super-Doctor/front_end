import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import six from "../slideimg/6.jpg";
import seven from "../slideimg/7.jpg";
import eight from "../slideimg/8.jpg";
import nine from "../slideimg/9.jpg";
import { CardActionArea, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Modals from "./model";
import axios from "axios";





class All extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false, appointmentData: [] };
  }

  showmodal = () => {
    this.setState({
      show: !this.state.show,
    });

    let getDoctorAppointment = async (doctorId) => {
      let appointmentsLink = `https://super-doctors.herokuapp.com/AllAppointments/${doctorId}`;

      await axios
        .get(appointmentsLink)
        .then((res) => {
          this.setState({
            appointmentData: res,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 "
              src={six}
              alt="First slide"
              height="500"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={seven}
              alt="Second slide"
              height="500"
              object-fit="cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eight}
              alt="Third slide"
              height="500"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={nine}
              alt="Third slide"
              height="500"
            />
          </Carousel.Item>
        </Carousel>

        {this.props.users.map((doctor, index) => {
          if (
            this.props.users[index].user.departmentId.toLowerCase() ==
            this.props.depType
          ) {
            return (
              <Card
                key={this.props.users[index].user.id}
                style={{ display: "inline-block" }}
                sx={{ maxWidth: 345 }}
                className="cardieB"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://thumbs.dreamstime.com/b/boy-girl-doctors-cartoon-characters-profession-s-costume-doctor-vector-illustration-male-female-doctors-cartoon-147440124.jpg"
                    alt="eyes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Name: {this.props.users[index].user.userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Gender: {this.props.users[index].user.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {this.props.users[index].user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={this.showmodal}>
                    Book an Appoinment !
                  </Button>
                  {this.state.show && (
                    <Modals
                      appointmentData={this.state.appointmentData}
                      doctorId={this.props.users[index].user.id}
                      showmodalFunc={this.showmodal}
                      showmodal={this.state.show}
                    />
                  )}
                </CardActions>
              </Card>
            );
          }
        })}
      </div>
    );
  }
}

export default All;
