// console.log(greet("Ceejay"));
describe('Test the shortest word (shortestWord) - the shortest one in the sentence ' , function(){
    it("It should returns the shortest word ,'the'" , function(){
        assert.equal('the', shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should returns the shortest word from the sentence ,'The dog jumped over the shipyard fence'" , function(){
        assert.equal('the', shortestWord('the'), "this should be true");
        // assert.deepEqual([2,2],[2,2]);
    });
});
// console.log(greet('Ceejay'))