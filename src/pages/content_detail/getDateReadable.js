export function getDateReadable (timestamp) {
  var date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // const readable = '';
  // if (needYear) {
  //   readable = readable + `${year}년`;
  // }
  // readable = readable + `${month}월 ${day}일`;

  const readable = `${year}년 ${month}월 ${day}일`;  
  

  return readable;
}