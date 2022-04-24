async function savePlayer(player) {
  let retrievedData = await JSON.parse(localStorage.getItem("records"))
  let record = retrievedData === null ? [] : retrievedData
  await record.push(player)
  localStorage.setItem("records", JSON.stringify(record));
}

export default savePlayer;
