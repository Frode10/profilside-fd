function toggleDiv() {
    let contentDiv = document.getElementById('content');
    let toggleBtn = document.getElementById('toggleBtn');
  
    if (contentDiv.classList.contains('hidden')) {
      contentDiv.classList.remove('hidden');
      toggleBtn.innerHTML = 'Av';
    } else {
      contentDiv.classList.add('hidden');
      toggleBtn.innerHTML = 'På';
    }
  }
  