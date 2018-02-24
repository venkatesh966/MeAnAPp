const chai = require('chai');
//const chaihttp = require('chai-http');
let expect = require('chai').expect;
const request=require('supertest');
const server = require('/final/mean/backend/index.js');
let should = chai.should();

chai.use(require('chai-http'));


    describe(' movies',() => { 
       
        //this.timeout(5000);
        it('should get all the movies',async () => {
            
            
            res=await request(server).get('/api/movies');
           // console.log(res);
                expect(res).to.have.status(200);
                expect(res.body[0].moviename).to.be.equal('chalo');
                res.body.should.be.a('array');
          
           
        })
    })

  



describe('/POST movies', () => {
         it('should add movie', async () => {
             chai.request(server).post('/api/movies').send({movieid:14,moviename:"chang",rating:2}).end((err, res) => {
                 //console.log(res);
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body.should.be.json;
                 done();
             });
        })
     })

   /*  describe('/delete movies', () => {
        it('should add movie', async () => {
            chai.request(server).delete('/api/movies').send({movieid:14,moviename:"chang",rating:8}).end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.json;
                done();
            });
       })
    })*/