export const flights = [
  {
    flight: {
      number: "DL432",
      iata: "DL432",
      icao: "DAL432",
      callsign: "DELTA 432",
    },
    airline: {
      name: "Delta Air Lines",
      iata: "DL",
      icao: "DAL",
    },
    departure: {
      airport: "Atlanta Hartsfield-Jackson Intl",
      iata: "ATL",
      icao: "KATL",
      scheduled_time_utc: "2025-07-08T08:00:00Z",
      actual_time_utc: "2025-07-08T08:12:00Z",
      terminal: "S",
      gate: "A14",
      runway: "8R",
    },
    arrival: {
      airport: "Chicago O'Hare Intl",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T09:45:00Z",
      estimated_time_utc: "2025-07-08T10:02:00Z",
      terminal: "2",
      gate: "E10",
      runway: "27L",
      baggage: "4",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N905DL",
      icao24: "A3CDE9",
      hex: "A3CDE9",
    },
    status: "en-route",
    delay_minutes: 17,
  },
  {
    flight: {
      number: "UA819",
      iata: "UA819",
      icao: "UAL819",
      callsign: "UNITED 819",
    },
    airline: {
      name: "United Airlines",
      iata: "UA",
      icao: "UAL",
    },
    departure: {
      airport: "San Francisco International Airport",
      iata: "SFO",
      icao: "KSFO",
      scheduled_time_utc: "2025-07-08T11:30:00Z",
      actual_time_utc: null,
      terminal: "3",
      gate: "F15",
      runway: null,
    },
    arrival: {
      airport: "Tokyo Haneda Airport",
      iata: "HND",
      icao: "RJTT",
      scheduled_time_utc: "2025-07-09T02:45:00Z",
      estimated_time_utc: null,
      terminal: "I",
      gate: null,
      runway: null,
      baggage: null,
    },
    aircraft: {
      model: "Boeing 787-9 Dreamliner",
      registration: "N27958",
      icao24: "A6A0E8",
      hex: "A6A0E8",
    },
    status: "scheduled",
    delay_minutes: 0,
  },
  {
    flight: {
      number: "NK2178",
      iata: "NK2178",
      icao: "NKS2178",
      callsign: "SPIRIT 2178",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T17:17:00Z",
      actual_time_utc: "2025-07-08T17:27:00Z",
      terminal: "5",
      gate: "C24",
      runway: "8L",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T20:17:00Z",
      estimated_time_utc: "2025-07-08T20:27:00Z",
      terminal: "1",
      gate: "C24",
      runway: "2C",
      baggage: "5",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N98688U",
      icao24: "4ACA04",
      hex: "AC265D",
    },
    status: "diverted",
    delay_minutes: 10,
  },
  {
    flight: {
      number: "WN9051",
      iata: "WN9051",
      icao: "SWA9051",
      callsign: "SOUTHWEST 9051",
    },
    airline: {
      name: "Southwest Airlines",
      iata: "WN",
      icao: "SWA",
    },
    departure: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T20:07:00Z",
      actual_time_utc: "2025-07-08T20:22:00Z",
      terminal: "5",
      gate: "E19",
      runway: "11L",
    },
    arrival: {
      airport: "Dallas/Fort Worth International",
      iata: "DFW",
      icao: "KDFW",
      scheduled_time_utc: "2025-07-08T23:07:00Z",
      estimated_time_utc: "2025-07-08T23:22:00Z",
      terminal: "1",
      gate: "B29",
      runway: "35R",
      baggage: "3",
    },
    aircraft: {
      model: "Boeing 737 MAX 9",
      registration: "N95468D",
      icao24: "0AE0EC",
      hex: "1F4A20",
    },
    status: "delayed",
    delay_minutes: 15,
  },
  {
    flight: {
      number: "F97803",
      iata: "F97803",
      icao: "FFT7803",
      callsign: "FRONTIER 7803",
    },
    airline: {
      name: "Frontier Airlines",
      iata: "F9",
      icao: "FFT",
    },
    departure: {
      airport: "Seattle-Tacoma International",
      iata: "SEA",
      icao: "KSEA",
      scheduled_time_utc: "2025-07-08T20:14:00Z",
      actual_time_utc: "2025-07-08T20:34:00Z",
      terminal: "1",
      gate: "F7",
      runway: "23R",
    },
    arrival: {
      airport: "Denver International",
      iata: "DEN",
      icao: "KDEN",
      scheduled_time_utc: "2025-07-08T23:14:00Z",
      estimated_time_utc: "2025-07-08T23:34:00Z",
      terminal: "3",
      gate: "A18",
      runway: "9C",
      baggage: "8",
    },
    aircraft: {
      model: "Embraer E175",
      registration: "N31772K",
      icao24: "CA58A2",
      hex: "8F847C",
    },
    status: "en-route",
    delay_minutes: 20,
  },
  {
    flight: {
      number: "AS7063",
      iata: "AS7063",
      icao: "ASA7063",
      callsign: "ALASKA 7063",
    },
    airline: {
      name: "Alaska Airlines",
      iata: "AS",
      icao: "ASA",
    },
    departure: {
      airport: "Seattle-Tacoma International",
      iata: "SEA",
      icao: "KSEA",
      scheduled_time_utc: "2025-07-08T18:34:00Z",
      actual_time_utc: "2025-07-08T19:34:00Z",
      terminal: "5",
      gate: "F4",
      runway: "18R",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T21:34:00Z",
      estimated_time_utc: "2025-07-08T22:34:00Z",
      terminal: "1",
      gate: "E1",
      runway: "2C",
      baggage: "7",
    },
    aircraft: {
      model: "Boeing 757-200",
      registration: "N84215T",
      icao24: "D9623C",
      hex: "B2BF90",
    },
    status: "en-route",
    delay_minutes: 60,
  },
  {
    flight: {
      number: "AS760",
      iata: "AS760",
      icao: "ASA760",
      callsign: "ALASKA 760",
    },
    airline: {
      name: "Alaska Airlines",
      iata: "AS",
      icao: "ASA",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T18:24:00Z",
      actual_time_utc: "2025-07-08T18:44:00Z",
      terminal: "1",
      gate: "C7",
      runway: "10C",
    },
    arrival: {
      airport: "Dallas/Fort Worth International",
      iata: "DFW",
      icao: "KDFW",
      scheduled_time_utc: "2025-07-08T21:24:00Z",
      estimated_time_utc: "2025-07-08T21:44:00Z",
      terminal: "3",
      gate: "B28",
      runway: "23L",
      baggage: "4",
    },
    aircraft: {
      model: "Airbus A320",
      registration: "N42480O",
      icao24: "90C3EE",
      hex: "5F4994",
    },
    status: "landed",
    delay_minutes: 20,
  },
  {
    flight: {
      number: "B69659",
      iata: "B69659",
      icao: "JBU9659",
      callsign: "JETBLUE 9659",
    },
    airline: {
      name: "JetBlue Airways",
      iata: "B6",
      icao: "JBU",
    },
    departure: {
      airport: "Miami International",
      iata: "MIA",
      icao: "KMIA",
      scheduled_time_utc: "2025-07-08T16:28:00Z",
      actual_time_utc: "2025-07-08T16:48:00Z",
      terminal: "5",
      gate: "E6",
      runway: "16C",
    },
    arrival: {
      airport: "Denver International",
      iata: "DEN",
      icao: "KDEN",
      scheduled_time_utc: "2025-07-08T19:28:00Z",
      estimated_time_utc: "2025-07-08T19:48:00Z",
      terminal: "1",
      gate: "B22",
      runway: "13L",
      baggage: "9",
    },
    aircraft: {
      model: "Airbus A320",
      registration: "N32529O",
      icao24: "EF704C",
      hex: "C5B572",
    },
    status: "active",
    delay_minutes: 20,
  },
  {
    flight: {
      number: "DL7292",
      iata: "DL7292",
      icao: "DAL7292",
      callsign: "DELTA 7292",
    },
    airline: {
      name: "Delta Air Lines",
      iata: "DL",
      icao: "DAL",
    },
    departure: {
      airport: "John F. Kennedy International",
      iata: "JFK",
      icao: "KJFK",
      scheduled_time_utc: "2025-07-08T20:25:00Z",
      actual_time_utc: "2025-07-08T20:25:00Z",
      terminal: "2",
      gate: "G5",
      runway: "12R",
    },
    arrival: {
      airport: "Seattle-Tacoma International",
      iata: "SEA",
      icao: "KSEA",
      scheduled_time_utc: "2025-07-08T23:25:00Z",
      estimated_time_utc: "2025-07-08T23:25:00Z",
      terminal: "2",
      gate: "D22",
      runway: "27R",
      baggage: "4",
    },
    aircraft: {
      model: "Airbus A220",
      registration: "N39171L",
      icao24: "AD12A1",
      hex: "DAE820",
    },
    status: "diverted",
    delay_minutes: 0,
  },
  {
    flight: {
      number: "F96313",
      iata: "F96313",
      icao: "FFT6313",
      callsign: "FRONTIER 6313",
    },
    airline: {
      name: "Frontier Airlines",
      iata: "F9",
      icao: "FFT",
    },
    departure: {
      airport: "Miami International",
      iata: "MIA",
      icao: "KMIA",
      scheduled_time_utc: "2025-07-08T16:53:00Z",
      actual_time_utc: "2025-07-08T16:53:00Z",
      terminal: "3",
      gate: "D22",
      runway: "16L",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T19:53:00Z",
      estimated_time_utc: "2025-07-08T19:53:00Z",
      terminal: "5",
      gate: "B8",
      runway: "26C",
      baggage: "2",
    },
    aircraft: {
      model: "Boeing 737 MAX 9",
      registration: "N33568H",
      icao24: "2394F3",
      hex: "A4992C",
    },
    status: "landed",
    delay_minutes: 0,
  },
  {
    flight: {
      number: "NK4004",
      iata: "NK4004",
      icao: "NKS4004",
      callsign: "SPIRIT 4004",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T18:29:00Z",
      actual_time_utc: "2025-07-08T19:29:00Z",
      terminal: "1",
      gate: "F14",
      runway: "22C",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T21:29:00Z",
      estimated_time_utc: "2025-07-08T22:29:00Z",
      terminal: "5",
      gate: "E18",
      runway: "12R",
      baggage: "1",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N54271E",
      icao24: "7ED7D3",
      hex: "0DAB7C",
    },
    status: "en-route",
    delay_minutes: 60,
  },
  {
    flight: {
      number: "WN4856",
      iata: "WN4856",
      icao: "SWA4856",
      callsign: "SOUTHWEST 4856",
    },
    airline: {
      name: "Southwest Airlines",
      iata: "WN",
      icao: "SWA",
    },
    departure: {
      airport: "Denver International",
      iata: "DEN",
      icao: "KDEN",
      scheduled_time_utc: "2025-07-08T15:42:00Z",
      actual_time_utc: "2025-07-08T15:57:00Z",
      terminal: "3",
      gate: "A3",
      runway: "26C",
    },
    arrival: {
      airport: "John F. Kennedy International",
      iata: "JFK",
      icao: "KJFK",
      scheduled_time_utc: "2025-07-08T18:42:00Z",
      estimated_time_utc: "2025-07-08T18:57:00Z",
      terminal: "1",
      gate: "G24",
      runway: "12L",
      baggage: "2",
    },
    aircraft: {
      model: "Embraer E175",
      registration: "N15247J",
      icao24: "B4161C",
      hex: "0E5F56",
    },
    status: "scheduled",
    delay_minutes: 15,
  },
  {
    flight: {
      number: "DL8329",
      iata: "DL8329",
      icao: "DAL8329",
      callsign: "DELTA 8329",
    },
    airline: {
      name: "Delta Air Lines",
      iata: "DL",
      icao: "DAL",
    },
    departure: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T19:50:00Z",
      actual_time_utc: "2025-07-08T20:05:00Z",
      terminal: "3",
      gate: "G16",
      runway: "14R",
    },
    arrival: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T22:50:00Z",
      estimated_time_utc: "2025-07-08T23:05:00Z",
      terminal: "1",
      gate: "G27",
      runway: "33L",
      baggage: "9",
    },
    aircraft: {
      model: "Embraer E175",
      registration: "N74715V",
      icao24: "1EE3B4",
      hex: "25BB89",
    },
    status: "scheduled",
    delay_minutes: 15,
  },
  {
    flight: {
      number: "NK5284",
      iata: "NK5284",
      icao: "NKS5284",
      callsign: "SPIRIT 5284",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T19:01:00Z",
      actual_time_utc: "2025-07-08T19:31:00Z",
      terminal: "2",
      gate: "C3",
      runway: "6R",
    },
    arrival: {
      airport: "Denver International",
      iata: "DEN",
      icao: "KDEN",
      scheduled_time_utc: "2025-07-08T22:01:00Z",
      estimated_time_utc: "2025-07-08T22:31:00Z",
      terminal: "4",
      gate: "C17",
      runway: "4C",
      baggage: "4",
    },
    aircraft: {
      model: "Boeing 737 MAX 9",
      registration: "N92311G",
      icao24: "39B8F1",
      hex: "D46F89",
    },
    status: "diverted",
    delay_minutes: 30,
  },
  {
    flight: {
      number: "NK8602",
      iata: "NK8602",
      icao: "NKS8602",
      callsign: "SPIRIT 8602",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "John F. Kennedy International",
      iata: "JFK",
      icao: "KJFK",
      scheduled_time_utc: "2025-07-08T16:58:00Z",
      actual_time_utc: "2025-07-08T17:28:00Z",
      terminal: "2",
      gate: "D21",
      runway: "35R",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T19:58:00Z",
      estimated_time_utc: "2025-07-08T20:28:00Z",
      terminal: "3",
      gate: "A29",
      runway: "4L",
      baggage: "2",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N26270T",
      icao24: "B60F23",
      hex: "726FE7",
    },
    status: "landed",
    delay_minutes: 30,
  },
  {
    flight: {
      number: "NK9335",
      iata: "NK9335",
      icao: "NKS9335",
      callsign: "SPIRIT 9335",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "Dallas/Fort Worth International",
      iata: "DFW",
      icao: "KDFW",
      scheduled_time_utc: "2025-07-08T20:37:00Z",
      actual_time_utc: "2025-07-08T20:42:00Z",
      terminal: "5",
      gate: "B9",
      runway: "15R",
    },
    arrival: {
      airport: "John F. Kennedy International",
      iata: "JFK",
      icao: "KJFK",
      scheduled_time_utc: "2025-07-08T23:37:00Z",
      estimated_time_utc: "2025-07-08T23:42:00Z",
      terminal: "3",
      gate: "C9",
      runway: "26C",
      baggage: "10",
    },
    aircraft: {
      model: "Airbus A320",
      registration: "N45946P",
      icao24: "2E34AD",
      hex: "47FB0B",
    },
    status: "diverted",
    delay_minutes: 5,
  },
  {
    flight: {
      number: "B64942",
      iata: "B64942",
      icao: "JBU4942",
      callsign: "JETBLUE 4942",
    },
    airline: {
      name: "JetBlue Airways",
      iata: "B6",
      icao: "JBU",
    },
    departure: {
      airport: "San Francisco International",
      iata: "SFO",
      icao: "KSFO",
      scheduled_time_utc: "2025-07-08T19:43:00Z",
      actual_time_utc: "2025-07-08T20:03:00Z",
      terminal: "1",
      gate: "F11",
      runway: "3R",
    },
    arrival: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T22:43:00Z",
      estimated_time_utc: "2025-07-08T23:03:00Z",
      terminal: "3",
      gate: "F23",
      runway: "14R",
      baggage: "1",
    },
    aircraft: {
      model: "Boeing 757-200",
      registration: "N19582N",
      icao24: "D9EDC0",
      hex: "6AE357",
    },
    status: "en-route",
    delay_minutes: 20,
  },
  {
    flight: {
      number: "WN4441",
      iata: "WN4441",
      icao: "SWA4441",
      callsign: "SOUTHWEST 4441",
    },
    airline: {
      name: "Southwest Airlines",
      iata: "WN",
      icao: "SWA",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T19:14:00Z",
      actual_time_utc: "2025-07-08T19:44:00Z",
      terminal: "5",
      gate: "F5",
      runway: "3L",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T22:14:00Z",
      estimated_time_utc: "2025-07-08T22:44:00Z",
      terminal: "4",
      gate: "A11",
      runway: "21L",
      baggage: "3",
    },
    aircraft: {
      model: "Boeing 737 MAX 9",
      registration: "N39527A",
      icao24: "CAA314",
      hex: "844228",
    },
    status: "scheduled",
    delay_minutes: 30,
  },
  {
    flight: {
      number: "NK2262",
      iata: "NK2262",
      icao: "NKS2262",
      callsign: "SPIRIT 2262",
    },
    airline: {
      name: "Spirit Airlines",
      iata: "NK",
      icao: "NKS",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T16:01:00Z",
      actual_time_utc: "2025-07-08T16:21:00Z",
      terminal: "4",
      gate: "E6",
      runway: "34C",
    },
    arrival: {
      airport: "Los Angeles International",
      iata: "LAX",
      icao: "KLAX",
      scheduled_time_utc: "2025-07-08T19:01:00Z",
      estimated_time_utc: "2025-07-08T19:21:00Z",
      terminal: "1",
      gate: "A18",
      runway: "30C",
      baggage: "3",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N18827S",
      icao24: "008ED8",
      hex: "C61FA8",
    },
    status: "active",
    delay_minutes: 20,
  },
  {
    flight: {
      number: "AS976",
      iata: "AS976",
      icao: "ASA976",
      callsign: "ALASKA 976",
    },
    airline: {
      name: "Alaska Airlines",
      iata: "AS",
      icao: "ASA",
    },
    departure: {
      airport: "Miami International",
      iata: "MIA",
      icao: "KMIA",
      scheduled_time_utc: "2025-07-08T19:00:00Z",
      actual_time_utc: "2025-07-08T19:10:00Z",
      terminal: "5",
      gate: "E16",
      runway: "27L",
    },
    arrival: {
      airport: "Dallas/Fort Worth International",
      iata: "DFW",
      icao: "KDFW",
      scheduled_time_utc: "2025-07-08T22:00:00Z",
      estimated_time_utc: "2025-07-08T22:10:00Z",
      terminal: "5",
      gate: "B15",
      runway: "6C",
      baggage: "2",
    },
    aircraft: {
      model: "Airbus A321",
      registration: "N76205N",
      icao24: "C5C74A",
      hex: "14A105",
    },
    status: "scheduled",
    delay_minutes: 10,
  },
  {
    flight: {
      number: "B67454",
      iata: "B67454",
      icao: "JBU7454",
      callsign: "JETBLUE 7454",
    },
    airline: {
      name: "JetBlue Airways",
      iata: "B6",
      icao: "JBU",
    },
    departure: {
      airport: "O'Hare International",
      iata: "ORD",
      icao: "KORD",
      scheduled_time_utc: "2025-07-08T16:18:00Z",
      actual_time_utc: "2025-07-08T16:33:00Z",
      terminal: "2",
      gate: "A13",
      runway: "25L",
    },
    arrival: {
      airport: "Miami International",
      iata: "MIA",
      icao: "KMIA",
      scheduled_time_utc: "2025-07-08T19:18:00Z",
      estimated_time_utc: "2025-07-08T19:33:00Z",
      terminal: "2",
      gate: "E11",
      runway: "18L",
      baggage: "5",
    },
    aircraft: {
      model: "Airbus A320",
      registration: "N34724Q",
      icao24: "426619",
      hex: "BE412F",
    },
    status: "scheduled",
    delay_minutes: 15,
  },
  {
    flight: {
      number: "UA8108",
      iata: "UA8108",
      icao: "UAL8108",
      callsign: "UNITED 8108",
    },
    airline: {
      name: "United Airlines",
      iata: "UA",
      icao: "UAL",
    },
    departure: {
      airport: "Miami International",
      iata: "MIA",
      icao: "KMIA",
      scheduled_time_utc: "2025-07-08T17:12:00Z",
      actual_time_utc: "2025-07-08T17:17:00Z",
      terminal: "1",
      gate: "E25",
      runway: "18L",
    },
    arrival: {
      airport: "San Francisco International",
      iata: "SFO",
      icao: "KSFO",
      scheduled_time_utc: "2025-07-08T20:12:00Z",
      estimated_time_utc: "2025-07-08T20:17:00Z",
      terminal: "1",
      gate: "D14",
      runway: "24L",
      baggage: "5",
    },
    aircraft: {
      model: "Boeing 757-200",
      registration: "N62854Q",
      icao24: "1F0C0C",
      hex: "4CC61A",
    },
    status: "active",
    delay_minutes: 5,
  },
];
