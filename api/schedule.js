export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600');

  const schedule = [
    {
      id: 1,
      name: "Pee-wee Scramble",
      date: "2026-04-04",
      time: "9:00 AM",
      location: "Daisy Field – Zone A",
      division: "peewee",
      divisionLabel: "Pee-wee (Ages 3–6)",
      spots: 24,
      registered: 18,
      status: "upcoming"
    },
    {
      id: 2,
      name: "Youth Sprint",
      date: "2026-04-04",
      time: "10:30 AM",
      location: "Riverside Park – North Lawn",
      division: "youth",
      divisionLabel: "Youth (Ages 7–12)",
      spots: 40,
      registered: 35,
      status: "upcoming"
    },
    {
      id: 3,
      name: "Teen Bracket Blitz",
      date: "2026-04-05",
      time: "11:00 AM",
      location: "Daisy Field – Zone B",
      division: "teen",
      divisionLabel: "Teen (Ages 13–17)",
      spots: 32,
      registered: 32,
      status: "full"
    },
    {
      id: 4,
      name: "Adult Championship",
      date: "2026-04-05",
      time: "1:00 PM",
      location: "Riverside Park – Main Arena",
      division: "adult",
      divisionLabel: "Adults (18+)",
      spots: 48,
      registered: 29,
      status: "upcoming"
    },
    {
      id: 5,
      name: "Grand Finale Relay",
      date: "2026-04-05",
      time: "3:30 PM",
      location: "Daisy Field – Full Grounds",
      division: "all",
      divisionLabel: "All Divisions",
      spots: 80,
      registered: 61,
      status: "upcoming"
    },
    {
      id: 6,
      name: "Championship Rematch",
      date: "2026-04-12",
      time: "10:00 AM",
      location: "Riverside Park – Main Arena",
      division: "adult",
      divisionLabel: "Adults (18+)",
      spots: 48,
      registered: 12,
      status: "upcoming"
    }
  ];

  res.status(200).json({ schedule });
}