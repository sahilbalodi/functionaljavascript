function getShortMessages(messages) {
  let result=new Array();
  for ( let i = 0; i < messages.length; i++) {
    if (messages[i].message.length<50) {
      result.push(messages[i].message);

    }
  }
  return result;
}
module.exports = getShortMessages;
