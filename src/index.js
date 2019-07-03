module.exports = function check(str, bracketsConfig) {

    let rowCounts = bracketsConfig.length;
    let queue = [];
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < rowCounts; i++) {
            switch (str.charAt(j)) {
                case bracketsConfig[i][0]:
                    if (bracketsConfig[i][0] == str.charAt(j) && bracketsConfig[i][1] == str.charAt(j)) {
                        if (queue.includes(str.charAt(j))) {
                            queue.pop();
                            break;
                        }
                    }
                    queue.push(bracketsConfig[i][0]);
                    break;
                case bracketsConfig[i][1]:
                    if (queue[queue.length - 1] != bracketsConfig[i][0]) return false;
                    else queue.pop();
                    break;
            }
        }
    }
    if (queue.length > 0) return false;
    else return true;

};
