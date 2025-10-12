    const submitbtn = document.getElementById('submitbtn');
    const blockContainer = document.getElementById('blockContainer');
    document.getElementById('submitbtn').addEventListener('click', function() {
    var numberInput = document.getElementById('numberInput').value;
    for(let i = 0; i < numberInput; i++) {
    if(Math.random() < 0.01) {
                const egg = document.createElement('div');
                egg.className = 'egg';
                blockContainer.appendChild(egg);
                window.alert('这是一个彩蛋');
                egg.addEventListener('click', function() {
                    egg.remove();
                });
            } else {
                const newBlock = document.createElement('div');
                newBlock.className = 'block';
                blockContainer.appendChild(newBlock);
                
                newBlock.addEventListener('click', function() {
                    newBlock.remove();
                });
            }
        }
    });