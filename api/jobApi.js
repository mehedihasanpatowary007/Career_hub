export const loadJobs = async () => {
  const res = await fetch("./../data/jobs.json");
  const data = await res.json();
  return data;
};
