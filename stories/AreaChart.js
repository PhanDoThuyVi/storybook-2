//author: nknbich
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { AreaChart, HeaderPredicateFactory, Visualization, PieChart, LineChart, ColumnChart } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures'; 
const WRAPPER_STYLE = { width: 1200, height: 400 };

storiesOf('AreaChart', module)
    .add('Not stacked', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Area chart 1M,1VB</h1>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={[fixtures.a_Product]}
        />
        <h1>Area chart 2M,1VB</h1>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            viewBy={[fixtures.a_Product]}
        />
        <h1>Area chart 2M,1VB, filter 1 value</h1>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            viewBy={[fixtures.a_YearClosed, fixtures.a_Product]}
            filters = {[fixtures.relativeDateYear, fixtures.filterProductCompuSci]}
        />
    </div>    
    ))
    .add('1M 1VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact</h1>
            <p>Apply stack to percent in this case</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures:['SumDayToClose']
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/952`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168282`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            
        </div>
        
    ))
    .add('1M 1VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, drill by viewBy</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=966644`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('1M 2VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill by parent</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by children</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, check format, drill by children</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('1M 2VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by child</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by parent</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by parent</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by child</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different, drill by StackBy</h1>
            <p>Because area will ignore SB if has more 2 VB, so can drill anything.</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToCloseRatio]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Department}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.owner.department')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('4M 3VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <p><b>Note: Always show warning in console: When there are two attributes in viewBy, only first measure is taken and attribute in stackBy is ignored</b></p>
            <p></p>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by ad-hoc metric Stage History</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1174`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>More than 2 viewBy, drill by metric Open Opps</h1>
            <h3>A. Applied with 2 viewBy in the top: Product, Stage Name</h3>
            <p>Don't drill anything</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName, fixtures.a_Department]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/13465`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Filter only one valule CompuSci, Interest with by all dimension</h3>
            <p>Show all points</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName, fixtures.a_Department]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            filters = {[fixtures.filterProductCompuSci, fixtures.filterStageNameInterest]}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/13465`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>C. Filter only one valule CompuSci, Interest with normal measure</h3>
            <p>Show one point</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps, fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName, fixtures.a_Department]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            filters = {[fixtures.filterProductCompuSci, fixtures.filterStageNameInterest]}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/13465`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stackMeasures, stack by parent</h1>
            <p>secondary_yaxis: min -90, max -90</p>
            <p>Drill by child Stage Name</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistoryRatio, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasuresToPercent: true,
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -90,
                    max: 90
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different</h1>
            <p>secondary_yaxis: min 0, max 100</p>
            <p>Drill by parent</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 100
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, stack by different</h1>
            <h3>A. Drill by parent value CompuSci</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistoryRatio, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -10,
                    max: 200
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Drill by child value Interest</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistoryRatio, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=966643`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>C. Drill by both parent CompuSci and child value Interest</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistoryRatio, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1095/elements?id=966643`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
        
    ))
    .add('Negative value', () =>(
        <div style={WRAPPER_STYLE}>
        <h1>More viewBy should ignore the second measure and SB</h1>
        <p>Only show measure MinPaid with 2 VB</p>
        <p>Ignore stackBy</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom,fixtures.a_FirstName]}
            stackBy={fixtures.a_Address}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.persons.firstname')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h1>Filter some values, stacking, drill by firstName</h1>
        <p>Only show measure MinPaid with 2 VB</p>
        <p>Ignore stacking</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom,fixtures.a_FirstName]}
            config={{
                stacking: true
            }}
            filters={[fixtures.filterFirstName]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.persons.firstname')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h1>Filter some values, stackMeasuresToPercent, drill by firstName</h1>
        <p>Only show measure MinPaid with 2 VB</p>
        <p>Ignore stackMeasuresToPercent</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom,fixtures.a_FirstName]}
            config={{
                stackMeasuresToPercent: true
            }}
            filters={[fixtures.filterFirstName]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.persons.firstname')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h1>Filter some values, stackMeasures, drill by firstName, min/max</h1>
        <p>secondary_yaxis: min -4500, max: 8000</p>
        <p>Only show measure MinPaid with 2 VB on secondary_yaxis</p>
        <p>Ignore stackMeasures</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom,fixtures.a_FirstName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['MinPaid'],
                    rotation: '-90',
                    min: -4500,
                    max: 8000
                }
            }}
            filters={[fixtures.filterFirstName]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.persons.firstname')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h1>Filter one value Anh</h1>
        <p>Set second measure on right axis. But because this case will ignore the second measure so insight should display MinPaid on left axis.</p>
        <p>secondary_yaxis: min -4500, max: 8000</p>
        <p>Don't show legend</p>
        <p>Ignore stackMeasures</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom,fixtures.a_FirstName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    measures: ['SumSalary'],
                    rotation: '360',
                    min: -4500,
                    max: 8000
                }
            }}
            filters={[fixtures.filterFirstNameAnh]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.persons.firstname')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h1>2M + 1VB</h1>
        <h3>A. secondary_yaxis: min -4500, max: 8000</h3>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom]}
            config={{
                secondary_yaxis:{
                    measures: ['SumSalary'],
                    rotation: '360',
                    min: -4500,
                    max: 8000
                }
            }}
            filters={[fixtures.filterFirstNameAnh]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('fact.persons.paid')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h3>B. stackMeasuresToPercent on left axis</h3>
        <p>Applied stackMeasuresToPercent</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom]}
            config={{
                stackMeasuresToPercent: true
            }}
            filters={[fixtures.filterFirstNameAnh]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('fact.persons.paid')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        <h3>C. stackMeasures on left axis</h3>
        <p>Applied stackMeasures</p>
        <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_MinPaid, fixtures.m_SumSalary]}
            viewBy={[fixtures.a_StartFrom]}
            config={{
                stackMeasures: true
            }}
            filters={[fixtures.filterFirstNameAnh]}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('fact.persons.paid')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />
        </div>
    ))
    .add('Different type measures', () => (
        <div style={WRAPPER_STYLE}>
            <h1>arithmeticMeasure</h1>
            <h3>A. stackMeasuresToPercent, drill stage history, config default right axis</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps, fixtures.m_CountStageHistory, fixtures.m_changeOfOpenOppsAndCountStageHistory, fixtures.m_ratioOfOpenOppsAndCountStageHistory]}
            viewBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '180',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/1174`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. stackMeasures, drill fact OpenOpps, visible secondary_yaxis</h3>
            <p>Hidden right y-axis, but apply stacked</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps, fixtures.m_CountStageHistory, fixtures.m_changeOfOpenOppsAndCountStageHistory, fixtures.m_ratioOfOpenOppsAndCountStageHistory]}
            viewBy={fixtures.a_Product}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '180',
                    visible: false
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/13465`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>C. stackMeasuresToPercent, drill stage history, labelsEnabled secondary_yaxis</h3>
            <p>Hidden right y-axis but apply stacked and show title of measures (if right y-axis has only one measure)</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps, fixtures.m_CountStageHistory, fixtures.m_changeOfOpenOppsAndCountStageHistory]}
            viewBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures: ['changeOfOpenOppsAndCountStageHistory'],
                    rotation: '180',
                    labelsEnabled: false
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/1174`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            
            <h1>POP Measure</h1>
            <h3>A. Filter relative by quarter, stackMeasures, drill by fact</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose, fixtures.m_POP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            filters={[fixtures.relativeDateQuater]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Filter relative by week_us, stackMeasuresToPercent, drill by fact</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose, fixtures.m_POP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            filters={[fixtures.relativeDateWeekUs]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>PP Measure</h1>
            <h3>A. Absolute Date, stackMeasures, drill by fact</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose, fixtures.m_PP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            filters={[fixtures.absoluteDate]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Absolute Date, stackMeasuresToPercent, drill by fact</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose, fixtures.m_PP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            filters={[fixtures.absoluteDate]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>  
    ))
    .add('Invalid case', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Use SB with more measures</h1>
            <h3>A. No VB, stackMeasuresToPercent</h3>
            <p>Still apply stack: left stacked to percent, right stacked</p>
            <p>x axis doesn't show label because don't have viewBy</p>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistory, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            stackBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 1000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1174`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Ratio, stackMeasuresToPercent, stackMeasures, stacked by parent</h3>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OppFirstSnapshot, fixtures.m_CountStageHistoryRatio, fixtures.m_OpenOpps, fixtures.m_SnapshotEOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true,
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 1000
                }
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            
            <h1>No data insight</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps]}
            viewBy={fixtures.a_Product}
            stackBy={fixtures.a_StageName}
            filters={[fixtures.filterProductTouchAll]}
            />

            <h1>Too large</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={fixtures.a_Account}
            />

            <h1>Can't render</h1>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={fixtures.a_Activity}
            stackBy={fixtures.a_StageName}
            />
        </div>
        
    ))
    .add('Visualization + Locale', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Visualization</h1>
            <p>A. Drill</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75553/edit">Area-Stack% - do not delete</a></p>
            <Visualization
            projectId={fixtures.projectId}
            identifier='aafbzXk7eRXw'
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <p>B. Locale fr-FR, Drill by child</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75553/edit">Area-Stack% - do not delete</a></p>
            <Visualization
            projectId={fixtures.projectId}
            identifier='aafbzXk7eRXw'
            locale="fr-FR"
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
        </div>
    ));
