// downloadpdf.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadpdf').addEventListener('click', function(event) {
        event.preventDefault();
        
        var file = this.getAttribute('data-file');
        var name = this.getAttribute('data-name');
        
        var data = {
            file: file,
            name: name
        };

        fetch('https://us-central1-connormaas-web-406700.cloudfunctions.net/download_pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = data.name;
            document.body.appendChild(a);
            a.click();
            a.remove(); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
