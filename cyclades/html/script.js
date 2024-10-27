(function () {
    let numChild = 1;

    function getNumChild() {
        return numChild++;
    }

    function moveFocusAfterDeletion(element) {
        let targetToFocus = null;
        if (element.nextElementSibling) {
            targetToFocus = element.nextElementSibling.querySelector('input');
        } else if (element.previousElementSibling) {
            targetToFocus = element.previousElementSibling.querySelector('input');
        } else {
            targetToFocus = document.querySelector('#addChild');
        }
        targetToFocus.focus();
    }

    function deleteChild(event) {
        const LI_TO_DESTROY = document.querySelector('#li-' + event.target.getAttribute('data-child'));
        moveFocusAfterDeletion(LI_TO_DESTROY);
        LI_TO_DESTROY.remove();
    }

    function addChildFormItem(childId, labelStr, labelCode) {
        const FORM_ITEM = document.createElement('div');
        FORM_ITEM.classList.add('form-item');
        const INPUT_ID = 'child-' + labelCode + '-' + childId;

        const LABEL = document.createElement('label');
        LABEL.setAttribute('for', INPUT_ID);
        LABEL.textContent = labelStr;
        FORM_ITEM.appendChild(LABEL);

        const INPUT = document.createElement('input');
        INPUT.type = 'text';
        INPUT.id = INPUT_ID;
        INPUT.name = INPUT_ID;
        INPUT.classList.add('field');
        FORM_ITEM.appendChild(INPUT);
        return FORM_ITEM;
    }

    function addChild() {
        const CHILD_ID = getNumChild();
        const NEW_ITEM_LIST = document.createElement('li');
        NEW_ITEM_LIST.id = 'li-' + CHILD_ID;

        const FILEDSET = document.createElement('fieldset');
        FILEDSET.classList.add('form-item');
        NEW_ITEM_LIST.appendChild(FILEDSET);

        const LEGEND = document.createElement('legend');
        LEGEND.textContent = 'Enfant ' + CHILD_ID;
        FILEDSET.appendChild(LEGEND);

        const FORM_CHILD = document.createElement('div');
        FORM_CHILD.classList.add('form-child');
        FORM_CHILD.appendChild(addChildFormItem(CHILD_ID, 'Nom', 'lastname'));
        FORM_CHILD.appendChild(addChildFormItem(CHILD_ID, 'Prénom', 'firstname'));
        FILEDSET.appendChild(FORM_CHILD);

        const DIV_CONTAINER = document.createElement('div');
        const FORM_ITEM = document.createElement('div');
        FORM_ITEM.classList.add('form-item');
        DIV_CONTAINER.appendChild(FORM_ITEM);

        const DELETE_CHILD_BUTTON = document.createElement('button');
        DELETE_CHILD_BUTTON.type = 'button';
        DELETE_CHILD_BUTTON.id = 'child-delete-' + CHILD_ID;
        DELETE_CHILD_BUTTON.setAttribute('data-child', CHILD_ID);
        DELETE_CHILD_BUTTON.classList.add('btn');
        DELETE_CHILD_BUTTON.textContent = 'Supprimer';
        DELETE_CHILD_BUTTON.addEventListener('click', (event) => {
            deleteChild(event);
        });
        FORM_ITEM.appendChild(DELETE_CHILD_BUTTON);
        FILEDSET.appendChild(DIV_CONTAINER);

        document.querySelector('#children').appendChild(NEW_ITEM_LIST);
        document.querySelector('#li-' + CHILD_ID + ' input').focus();
    }

    document.querySelector('#addChild').addEventListener('click', function () {
        addChild();
    });
})();

var width = 8;
function move() {
    var elem = document.getElementById("barStatus");

    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            //clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
