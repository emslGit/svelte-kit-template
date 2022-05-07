import { status } from "../app.store";

export async function fetchData(): Promise<Object | null> {
  const baseUrl: string = "https://www.boredapi.com/api/activity?";
  let data: Object | null = null;

  status.setLoading();

  await fetch(baseUrl)
    .then(res => res.json())
    .then(_data => {
      data = _data.activity
    })
    .catch(e => {
      console.log(e);
      status.setFailed();
    })
    .finally(() => status.setSuccess());

  return data;
}