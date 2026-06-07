"use server";

export async function getMockData() {
  return [
    {
      id: 1,
      departure: "Bergen",
      arrival: "Stavanger",
      ETD: "01.07.26 14.30",
      ETA: "01.07.26 19.00",
      duration: 4.5,
      price: 800,
    },
    {
      id: 2,
      departure: "Stavanger",
      arrival: "Hirtshals",
      ETD: "01.07.26 19.30",
      ETA: "01.07.26 08.00",
      duration: 12.5,
      price: 1000,
    },
    {
      id: 3,
      departure: "Bergen",
      arrival: "Hirtshals",
      ETD: "01.07.26 14.30",
      ETA: "02.07.26 08.00",
      duration: 17.5,
      price: 1900,
    },
    {
      id: 4,
      departure: "Hirtshals",
      arrival: "Stavanger",
      ETD: "02.07.26 20.00",
      ETA: "03.07.26 10.00",
      duration: 14,
      price: 1200,
    },
    {
      id: 5,
      departure: "Stavanger",
      arrival: "Bergen",
      ETD: "03.07.26 10.30",
      ETA: "03.07.26 15.00",
      duration: 4.5,
      price: 800,
    },
    {
      id: 6,
      departure: "Hirtshals",
      arrival: "Bergen",
      ETD: "02.07.26 20.00",
      ETA: "03.07.26 15.00",
      duration: 19,
      price: 1900,
    },
    {
      id: 7,
      departure: "Bergen",
      arrival: "Stavanger",
      ETD: "01.07.26 15.30",
      ETA: "01.07.26 20.00",
      duration: 4.5,
      price: 800,
    },
  ];
}
