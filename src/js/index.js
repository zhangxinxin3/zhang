require(['config'], function() {
    require(['better'], function(better) {
        var mosk = document.querySelector('.mosk');
        var btn = document.querySelector('#btn');
        var inp = document.querySelector('.inp');
        var sure = document.querySelector('.sure');
        var box = document.querySelector('.box');
        btn.onclick = function() {
            mosk.style.display = 'flex';
        }

        sure.onclick = function() {
            var text = inp.value;
            if (text) {
                mosk.style.display = 'none';
                box.innerHTML += `<dl>
                                    <dd>
                                        <h4>${text}</h4>
                                        <p>添加事件:2018-06-21</p>
                                    </dd>
                                    <dt>
                                        <p class="add">编辑</p>
                                        <p class="remove">删除</p>
                                    </dt>
                                </dl>`;

            } else { alert('您还没有输入') }
        }
        var remove = document.querySelector('.remove');
        remove.onclick = function() {
            box.removeChild(this.parentElement.parentElement);
        }
    });
});