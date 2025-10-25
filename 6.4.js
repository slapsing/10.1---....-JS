const n = 3;
for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
        row.push((i + j) % 2 === 0 ? 'x' : 'o');
    }
    console.log(row.join(' '));
    // alert(row.join(' '));

}