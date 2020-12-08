<template>
<div>
    async 语法
</div>
</template>

<script>
export default {
    name: "asyc",
    //props: ['title'],
    //每个 prop 都有指定的值类型
    props: {
        title: String,
        age: Number,
        isPublished: Boolean
    },
    data() {
        return {
            msg: "base button"
        };
    },
    methods: {
        async timeout(ms) {
            await new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        },
        async asyncPrint(value, ms) {
            await this.timeout(ms);
            console.log(value);
        },
        test() {
            console.log('test');
            this.asyncPrint('hello world', 2000);
            async function f() {
                return 'hello world 2';
            }

            //async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
            f().then(v => console.log(v));
            async function f2() {
                throw new Error('出错了');
            }

            f2().then(
                v => console.log('resolve f2', v),
                e => console.error('rejectf2', e)
            )

            function sleep(interval) {
                return new Promise(resolve => {
                    setTimeout(resolve, interval);
                })
            }

            // 用法
            async function one2FiveInAsync() {
                for (let i = 1; i <= 5; i++) {
                    console.log(i);
                    await sleep(1000);
                }
            }

            //one2FiveInAsync();
            console.log('after sleep 5 seconds');
            this.asyncPrint('hello world 3000', 3000);
            console.log('before hello world 4000');
            this.asyncPrint('hello world 4000', 4000);

            var p1 = Promise.resolve(1),
                p2 = Promise.resolve(2),
                p3 = Promise.resolve(3);
            Promise.all([p1, p2, p3]).then(function (results) {
                console.log('promise all done');
                console.log(results); // [1, 2, 3]
            });

            return;
            // let s5 = await sleep5;
            // let s10 = await sleep10;
            // return;
            //有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
            //这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
            //另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
            async function f3() {
                await Promise.reject('出错了 f3')
                    .catch(e => console.error(e));
                return await Promise.resolve('hello world f3');
            }

            f3().then(v => console.log(v))

            //async函数f执行后，await后面的 Promise 对象会抛出一个错误对象，导致catch方法的回调函数被调用，它的参数就是抛出的错误对象
            //防止出错的方法，也是将其放在try...catch代码块之中。,详见f5
            async function f4() {
                await new Promise(function (resolve, reject) {
                    throw new Error('出错了f4');
                });
            }

            f4().then(v => console.log(v))
                .catch(e => console.error(e))

            async function f5() {
                try {
                    await new Promise(function (resolve, reject) {
                        throw new Error('出错了f5');
                    });
                } catch (e) {
                    console.error('f5 error', e)
                }
                return await ('hello world f5');
            }

            f5().then(v => console.log(v))
                .catch(e => console.error(e))
        },
        test2() {

            const promise = new Promise(function (resolve, reject) {
                // ... some code
                let result = false;
                let value = 'true';
                let error = "error happened";
                if (result) {
                    resolve(value);
                } else {
                    reject(error);
                }
            });

            promise.then(function (value) {
                // success
                console.log('success', value);
            }, function (error) {
                // failure
                console.error('failure', error);
            });

            //Promise 新建后就会立即执行。
            let promise2 = new Promise(function (resolve, reject) {
                console.log('Promise');
                resolve();
            });

            promise2.then(function () {
                console.log('resolved.');
            });

            console.log('Hi!');

            const getJSON = function (url) {
                const promise = new Promise(function (resolve, reject) {
                    const handler = function () {
                        if (this.readyState !== 4) {
                            return;
                        }
                        if (this.status === 200) {
                            resolve(this.response);
                        } else {
                            reject(new Error(this.statusText));
                        }
                    };
                    const client = new XMLHttpRequest();
                    client.open("GET", url);
                    client.onreadystatechange = handler;
                    client.responseType = "json";
                    client.setRequestHeader("Accept", "application/json");
                    client.send();

                });

                return promise;
            };

            // getJSON("/src/data/posts.json").then(function (json) {
            //     console.log('Contents: ' + JSON.stringify(json));
            // }, function (error) {
            //     console.error('出错了', error);
            // });

            const p1 = new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('fail')), 3000)
            })

            const p2 = new Promise(function (resolve, reject) {
                setTimeout(() => resolve(p1), 1000)
            })

            p2
                .then(result => console.log(result))
                .catch(error => console.error(error))
            // Error: fail

            const p10 = new Promise((resolve, reject) => {
                    resolve('hello p10');
                })
                .then(result => result)
            //.catch(e => e);

            const p11 = new Promise((resolve, reject) => {
                    throw new Error('报错了');
                })
                .then(result => result)
            //.catch(e => e);

            Promise.all([p10, p11])
                .then(result => console.log(result))
                .catch(e => console.log('all catch', e));
        },
        test3() {
            let promise2 = new Promise(function (resolve, reject) {
                console.log('1');
                resolve(3);
            }).then(function (num) {
                console.log(num);
            });

            console.log('2');

            let thenable = {
                then: function (resolve, reject) {
                    resolve(42);
                }
            };

            let p1 = Promise.resolve(thenable);
            p1.then(function (value) {
                console.log(value); // 42
            });

            const p = Promise.resolve('Hello');

            p.then(function (s) {
                console.log(s)
            });

            //下面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行
            //，console.log('one')则是立即执行，因此最先输出。
            setTimeout(function () {
                console.log('three');
            }, 0);

            Promise.resolve().then(function () {
                console.log('two');
            });

            console.log('one');
        }
    },
    created() {
        //alert('Created')
        //this.test();
        console.log('created');
        //this.test2();
        this.test3();
    }
};
</script>
