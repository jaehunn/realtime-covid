export const DAYS_PER_MONTH = {
  1: "31",
  2: ["28", "29"],
  3: "31",
  4: "30",
  5: "31",
  6: "30",
  7: "31",
  8: "31",
  9: "30",
  10: "31",
  11: "30",
  12: "31",
};

export const navInfos = [
  { name: "Domestic", href: "/" },
  {
    name: "Overseas",
    href: "/overseas",
  },
  { name: "Vaccine", href: "/vaccine" },
];

export const domesticChartSelectOptions = {
  firstOptions: [
    { value: "decideCnt", name: "Confirmed" },
    { value: "deathCnt", name: "Deaths" },
    { value: "clearCnt", name: "Recovered" },
    { value: "accExamCnt", name: "Tested" },
    { value: "decideRate", name: "Confirmed Rate" },
  ],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
    { value: "monthly", name: "Monthly" },
  ],
};

export const overseasChartSelectOptions = {
  firstOptions: [
    { value: "decideCnt", name: "Confirmed" },
    { value: "deathCnt", name: "Deaths" },
  ],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
    { value: "monthly", name: "Monthly" },
  ],
};

export const vaccineChartSelectOptions = {
  firstOptions: [],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
  ],
};
