import { Grid} from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MediaQuery from 'react-responsive';
import { MetaInfo } from "./MetaInfo";
import MapContainer from "./MapContainer";

const OfficeInfoCard = ({title, content, address}) => {
    return (
        <React.Fragment>
					<CardContent>
					<Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="black" gutterBottom>
						호스트 메시지
					</Typography>
						<Typography variant="body2" color="text.secondary" style={{whiteSpace: 'pre-line'}}>
								{content}
						</Typography>
						<MapContainer address_road={address} />
					</CardContent>
        </React.Fragment>
    );
}

const ContactCard = ({userName, phoneNumber}) => {
    return (
    <React.Fragment>
        <CardContent sx={{backgroundColor:'#eeeeee'}}>
            <Typography sx={{ fontSize: 18, fontWeight:'bold'}} color="black" gutterBottom>
                연락처
            </Typography>
            <Typography variant="body2" color="text.secondary">
                전화번호: {phoneNumber}
            </Typography>
            <Typography variant="caption" color="text.secondary">
							전화 문의시 ‘둘러에서 보고 전화드렸어요’ 라고 하시면 문의가 쉽습니다.
            </Typography>
        </CardContent>
    </React.Fragment>
    );
}

const OfficeInfoContainer = ({office}) => {
	const title = office.office_title;
	const location = office.office_location;
	const content = office.office_content;

	const deposit = office.office_deposit;
	const fee = office.office_fee;

	const userName = office.user_name;
	const phoneNumber = office.user_phone;
	const views_count = office.views_count;
	const create_time = office.create_time;

  let address = null;

	if(office.address_road === null) {
    address = `${office.sido}시 ${office.sigungu} ${office.roadname}`;
	} else{
		address = office.address_road;
  }

	return (
		<div
			style={{
				paddingTop: '50px',
				paddingBottom: '50px',
			}}
		>
			<MetaInfo views_count={views_count} create_time={create_time}></MetaInfo>
			<MediaQuery maxWidth={900}>
			<Grid container spacing={2} direction={'column'}>
					<Grid item xs={4} border={true}>
						<Card variant="outlined"><ContactCard userName={userName} phoneNumber={phoneNumber}></ContactCard></Card>
					</Grid>
					<Grid item xs={8}>
							<Card variant="outlined"><OfficeInfoCard title={title} content={content} address={address}></OfficeInfoCard></Card>
					</Grid>
			</Grid>
			</MediaQuery>
			<MediaQuery minWidth={901}>
			<Grid container spacing={4}>
					<Grid item xs={8}>
							<Card variant="outlined"><OfficeInfoCard title={title} content={content} address={address}></OfficeInfoCard></Card>
					</Grid>
					<Grid item xs={4} border={true}>
							<Card variant="outlined"><ContactCard userName={userName} phoneNumber={phoneNumber}></ContactCard></Card>
					</Grid>
			</Grid>
			</MediaQuery>
		</div>
	);
};

export default OfficeInfoContainer;