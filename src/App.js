import React from 'react';
import { Component } from 'react'
import './App.css';
import request from './request.js'
class App extends Component {
  constructor(props){
    super(props)
    const list = []
    const fields = []
    const fieldObject = {
      'id':'Horse No.',
      'run':'Last 6 Runs',
      'style':'Color',
      'hourse':"Hourse",
      'wt':'Wt.',
      'jockey':"Jockey",
      'draw':"Draw", 
      'trainer':"Trainer", 
      'reg':"Reg", 
      'rtg':"Rtg.+/-", 
      'declaration':"Horse Wt.(Declaration)", 
      'priority':"Priority", 
      'gear':"Gear"
    }
    this.state = {list, fields, fieldObject}
    
  }
  componentWillMount(){
    this.fetchData()
  }
  async fetchData(){
    const data = await request.get()
    const list = data.list
  
    this.setState({
      list,
    })
  }
  searchData(){
    let {list} = this.state
    const data = document.getElementById('hourse').value
    console.log(data)
    list = list.filter(item => {
      return item.hourse === data
    })
    this.setState({list})
  }
  showField(e){
    const name = e.target.name
    let {fields} = this.state
    fields = fields.filter(item=>{
      return item !== name
    })
    this.setState({fields})
  }
  changeField(e){
    const name = e.target.name
    const {fields} = this.state
    if(!fields.includes(name)){
      fields.push(name)
    }
    this.setState({fields})
  }
  render(){
    const {list, fields, fieldObject} = this.state
    console.log(fieldObject)
    return (
      <div className="app-container">
        <div className="racing-container">
          <form name="formData">
            <div className="handle-bar clear">
              <button type="button" className="primary-btn" onClick={this.fetchData.bind(this)}>refresh lastest data</button>
              <div className="search-box">
                <input type="text" id="hourse" className="input-box" placeholder="please enter hourse" name="hourse"/>
                <button type="button" className="primary-btn" onClick={this.searchData.bind(this)}>search</button>
              </div>
            </div>
            <div className="handle-bar clear">
              <span className="left-side">show hidden field：</span>
              <ul className="common-ul">
                {
                  fields.map((item, key) => {
                    return (
                      <li key={key}>
                        <input type="checkbox" name={item} className="check-box" onChange={this.showField.bind(this)}/>{fieldObject[item]}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </form>
          <table className="racing-table">
            <thead>
              <tr>
                {fields.includes('id') === false && (<th name="id" > <input type="checkbox" className="check-box" name="id" onChange={this.changeField.bind(this)}/>Horse No.</th>)}
                {fields.includes('run') === false && (<th name="run" > <input type="checkbox" className="check-box" name="run" onChange={this.changeField.bind(this)}/>Last 6 Runs</th>)}
                {fields.includes('style') === false && (<th name="style" > <input type="checkbox" className="check-box" name="style" onChange={this.changeField.bind(this)}/>Color</th>)}
                {fields.includes('hourse') === false && (<th name="hourse" > <input type="checkbox" className="check-box" name="hourse" onChange={this.changeField.bind(this)}/>Hourse</th>)}
                {fields.includes('wt') === false && (<th name="wt" > <input type="checkbox" className="check-box" name="wt" onChange={this.changeField.bind(this)}/>Wt.</th>)}
                {fields.includes('jockey') === false && (<th name="jockey" > <input type="checkbox" className="check-box" name="jockey" onChange={this.changeField.bind(this)}/>Jockey</th>)}
                {fields.includes('draw') === false && (<th name="draw" > <input type="checkbox" className="check-box" name="draw" onChange={this.changeField.bind(this)}/>Draw</th>)}
                {fields.includes('trainer') === false && (<th name="trainer" > <input type="checkbox" className="check-box" name="trainer" onChange={this.changeField.bind(this)}/>Trainer</th>)}
                {fields.includes('reg') === false && (<th name="reg" > <input type="checkbox" className="check-box" name="reg" onChange={this.changeField.bind(this)}/>Reg.</th>)}
                {fields.includes('rtg') === false && (<th name="rtg" > <input type="checkbox" className="check-box" name="rtg" onChange={this.changeField.bind(this)}/>Rtg.+/-</th>)}
                {fields.includes('declaration') === false && (<th name="declaration" > <input type="checkbox" className="check-box" name="declaration" onChange={this.changeField.bind(this)}/>Horse Wt.(Declaration)</th>)}
                {fields.includes('priority') === false && (<th name="priority" > <input type="checkbox" className="check-box" name="priority" onChange={this.changeField.bind(this)}/>Priority</th>)}
                {fields.includes('gear') === false && (<th name="gear" > <input type="checkbox" className="check-box" name="gear" onChange={this.changeField.bind(this)}/>Gear</th>)}
              </tr>
            </thead>
            <tbody>
              {list.map( (item, key) => {
                return (
                  <tr key={key}>
                    {fields.includes('id') === false && (<td name="id">{item.hourseNo}</td>)}
                    {fields.includes('run') === false && (<td name="run">{item.lastestRun}</td>)}
                    {fields.includes('style') === false && (<td name="style">{item.color}</td>)}
                    {fields.includes('hourse') === false && (<td name="hourse">{item.hourse}</td>)}
                    {fields.includes('wt') === false && (<td name="wt">{item.wt}</td>)}
                    {fields.includes('jockey') === false && (<td name="jockey">{item.jockey}</td>)}
                    {fields.includes('draw') === false && (<td name="draw">{item.draw}</td>)}
                    {fields.includes('trainer') === false && (<td name="trainer">{item.trainer}</td>)}
                    {fields.includes('reg') === false && (<td name="reg">{item.reg}</td>)}
                    {fields.includes('rtg') === false && (<td name="rtg">{item.rtg}</td>)}
                    {fields.includes('horseWt') === false && (<td name="horseWt">{item.horseWt}</td>)}
                    {fields.includes('priority') === false && (<td name="priority">{item.priority}</td>)}
                    {fields.includes('gear') === false && (<td name="gear">{item.gear}</td>)}
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default App;
