export function getDateReadable (timestamp) {
  var date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

  // const readable = '';
  // if (needYear) {
  //   readable = readable + `${year}년`;
  // }
  // readable = readable + `${month}월 ${day}일`;

  const now = new Date(Date.now());

  var difference = now - date;

  var daysDifference = Math.floor(difference/1000/60/60/24);

  var readable = '';
  if (daysDifference === 0) {
    readable = `오늘`;
  } else if (daysDifference === 1) {
    readable = `어제`;
  }
  else {
    readable = `${month}월 ${day}일`;  
  }

  return readable;
}