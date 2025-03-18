function downloadVideo() {
    let url = document.getElementById("videoUrl").value;
    if (url === "") {
        alert("Please enter a Facebook video URL!");
        return;
    }
    
    // এখানে তোমার Facebook Video Download API লিঙ্ক বসাও
    let apiURL = `https://your-facebook-api.com/download?url=${encodeURIComponent(url)}`;
    
    // নতুন উইন্ডোতে ভিডিও ডাউনলোড লিঙ্ক খুলবে
    window.open(apiURL, "_blank");
}
