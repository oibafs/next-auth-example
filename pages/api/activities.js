export default async function activities(request,response) {
    const clientId = process.env.STRAVA_CLIENT_ID;
    const clientSecret = process.env.CLIENTSECRET;
    const dynamicDate = new Date();
  
    console.log(clientId);
 
    const activitiesResponse = await fetch("https://www.strava.com/api/v3/athlete/activities");
    const activitiesResponseJson = await activitiesResponse.json();

//    const kudoersResponse = await fetch("https://viacep.com.br/ws/13300065/json/");
//    const kudoersResponseJson = await kudoersResponse.json();
  
    response.json({
      activities: activitiesResponseJson,
    });
  }
