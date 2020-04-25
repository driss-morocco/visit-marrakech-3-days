import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Marrakech in 3 Days</title>
      </Helmet>
      <h1>Marrakech in 3 Days</h1>
      <p><a href="https://thinkmorocco.com/3-days-in-marrakech/">Marrakech and Fez are the main imperial cities essential for any visit to Morocco</a>. By combining the Sahara desert with Fez and Marrakech, your visit to the Moroccan desert will be as rich as possible. This tour through the desert from Marrakech to the Erg Chebbi dunes in Merzouga is one of the best routes for those who wish to visit the deep desert of Morocco without wasting time driving long hours, especially on the third day. The visit is rich in landscapes, you will never get bored because you will be busy admiring one scene after another. The incredible change of scenery is amazing: fertile atlas maps around Marrakech, passing through the High Atlas, then several panoramas of the valley and the oases, and finally, the sand dunes of Erg Chebbi.</p>
<p><img src="https://thinkmorocco.com/wp-content/uploads/2020/03/Saadiens-Tombs-1024x682.jpg" alt="" width="1024" height="682" /></p>
<p>Availability: Daily departure from Marrakech.<br />Destination: Erg Chebbi Dunes Merzouga Morocco and return to Fez.<br />Pick up time: 7:30 am from your hotel or Riad in Marrakech<br />Duration: 3 days 2 nights<br />Category: cheap excursion<br />Payment: payment is made directly to the driver in any currency.<br />Recommendations: Comfortable clothes, hat, jacket and sunscreen, camera and phone chargers, warm clothes in winter.</p>
<p>DAY 1: MARRAKECH - DADDY (7 HOURS DRIVING) <br />This circuit from Marrakech to Merzouga to Fez in Morocco will start from your hotel or riad at 7:30 a.m. for the Ait Ben Hadou Kasbah through the Tizi Ntichka pass and the High Atlas mountains. There will be many stops along the way. Visit the Kasbah A&iuml;t Ben Haddou, a UNESCO World Heritage Site, which has also been the setting for several Hollywood success stories. Continue to Ouarzazate and visit the Kasbah Taourirte before lunch (free lunch). In the afternoon, we drive to Boumalne Dades through the Rose Valley before arriving at your small hotel located in the Dades Valley. Dinner and overnight at the hotel.</p>
<p>DAY 2: DADES - MERZOUGA (4 HOURS DRIVING) <br />After breakfast, our journey today will begin with Thousand and One Kasbah Road to Tinghir Oasis. You will enjoy the magnificent scenery along the last fortified villages that sheltered the caravan routes until the early 20th century. When we reach Tinghir, we will take a secondary road that leads to the oasis. Take time to walk along the stream and watch the locals grow crops and raise their livestock. Your walk will end at the majestic Todgha Gorge. After lunch in one of the local cafes (free lunch, continue to Rissani, the famous starting point of the ancient caravan routes will cross the Sahara desert to Timbuktu. From there, we will cross rocky lands to Merzouga, where our Camel Caravan will be waiting for us. Enjoy a camel ride through the dunes of Erg Chebbi to admire a magnificent sunset before returning to our camp in the Sahara desert, located next to the lodge. under the stars while our local nomadic hosts play the drums.</p>
<p>DAY 3: MERZOUGA - FES (8 HOURS DRIVING) <br />After getting up to watch the sunset, have breakfast at the camper's cabin. You will then have time to refresh yourself before saying goodbye to the group returning to Marrakech and meet your new driver who will take you to Fez. Once you have settled into your minibus, leave for Fez by crossing the Ziz Vlley via Errachidia, the capital of the Tafilalt region, and continue to Midelt, where you will have a free lunch. Continue across the Middle Atlas Mountains with their cedar forests and the Berber towns of Imouzzar and Ifran. You will arrive in Fez in the late afternoon. Your shared excursion in the desert from Marrakech to Fez will end with a stopover at your Riad or hotel in Fez of your choice.</p>
<p>Our advice for this 3 day desert tour from Marrakech to Merzouga and back to Fez <br />- If you wish to spend the night in a private tent in Merzouga with the appropriate bedding and the possibility to shower in a private room in the hostel the next day in Merzouga before returning to Marrakech, an additional charge of 10.00 euros per person will be applied.<br />- This tour includes stops for shopping, don't feel you have to buy.<br />- If you wish to spend the night in a private room in Dades with the appropriate bedding and private bathroom, a supplement of 10.00 euros per person will be required.<br />- Visiting the kasbah in Ait ben-hadou is free of charge.<br />- If you wish to take an optional local guide, the recommended price is 3 euros (negotiable at the beginning) per person and you do not feel obliged to make any purchases.<br />- You can take your luggage with you without exceeding one rucksack and one suitcase per person.<br />- This tour is not suitable for children under 12 years.<br />- Do not take this tour if you have a flight on the same day, there may be a delay on the return.<br />- The last day is a long journey by car from Merzouga to Marrakech and we recommend that you take the extended tour for 4 days if possible, especially if you are travelling with small children.<br />- The private visit is always better 220 euros per person. Translated with www.DeepL.com/Translator (free version)</p>
    </main>
  );
}

export default Index;
