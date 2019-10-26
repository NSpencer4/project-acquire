class AcquisitionChannelService {
	getChannels() {
		return fetch("/mock-data/channels.json")
			.then(res => res.json())
			.catch((error) => {
				console.error(error)
			});
	}
}

export default AcquisitionChannelService;