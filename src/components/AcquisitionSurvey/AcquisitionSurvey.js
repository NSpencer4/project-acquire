import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from '@material-ui/core';
import './AcquisitionSurvey.css';
import AcquisitionChannelService from '../../services/AcquisitionChannelService';

class AcquisitionSurvey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [],
			isLoaded: false
		};
		this.acquisitionChannelService = new AcquisitionChannelService();
	}

	componentDidMount() {
		this.acquisitionChannelService.getChannels().then((channels) => {
			this.setState({
				channels: channels,
				isLoaded: true
			});
		});
	}

	renderAcquisitionChannels() {
		let renderedChannels = [];
		this.state.channels.forEach((channel) => {
			renderedChannels.push(
				<Grid item sm={3}>
					<Card>
						<CardContent>
							<section className="acq-image-wrapper">
								<img src={channel.imagePath} title={channel.title} alt={channel.title}></img>
							</section>
						</CardContent>
					</Card>
				</Grid>
			)
		});

		return renderedChannels;
	}

	render() {
		if (this.state.isLoaded) {
			return (
				<Container maxWidth="xl">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12}>
							<Typography variant="h4">
								How did you find us?
							</Typography>
						</Grid>
					</Grid>
					<section id="card-section">
						<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
							{this.renderAcquisitionChannels()}
						</Grid>
					</section>
				</Container>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default AcquisitionSurvey;