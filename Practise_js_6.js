/* Async Examples */

function downloadFile(url,downloaded)
{
  console.log("Downloading File "+url)
  setTimeout(function() // to generate a fake delay
  {
    let filePath = "some location"
    console.log("file downloaded to "+filePath)
    downloaded(filePath)
  },3000)
}
downloadFile("some url",function(path)
{
  console.log ("we got file at "+path)
})
