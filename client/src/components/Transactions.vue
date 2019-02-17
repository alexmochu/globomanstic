<template>
  <v-card>
    <v-card-title>
      <span pr-3>
        Transactions for {{ months[currentMonth] }} - {{ currentYear }}
      </span>
      <v-btn flat icon pr-2 @click="gotoMonth(-1)">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn flat icon pr-2 @click="gotoCurrentMonth">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn flat icon pr-2 @click="gotoMonth(1)">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-fade-transition>
        <v-btn color="error" v-show="selected.length > 0" @click="deleteSelected">
          Delete Selected
          <v-icon right>delete_forever</v-icon>
        </v-btn>
      </v-fade-transition>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"/>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="transactions"
      :search="search"
      :loading="loading"
      class="elevation-1"
      select-all
    >
      <v-progress-linear slot="progress" color="blue" indeterminate/>
      <template slot="items" slot-scope="props">
        <tr @click="expand(props)">
          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details />
          </td>
          <td>{{ props.item.date }}</td>
          <td>{{ props.item.type }}</td>
          <td>{{ props.item.description }}</td>
          <td>{{ props.item.charge }}</td>
          <td>{{ props.item.deposit }}</td>
          <td>
            <v-btn icon flat color="primary">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon flat color="error">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text>{{ props.item.notes }}</v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      opened: false,
      loading: false,
      search: '',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      currentMonth: new Date().getMonth(),
      currentYear: 2018,
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Type', value: 'type' },
        { text: 'Description', value: 'description', sortable: false },
        { text: 'Charge', value: 'charge' },
        { text: 'Deposit', value: 'deposit' },
        { text: 'Actions', value: 'actions' }
      ],
      selected: [],
      transactions: [
        {
          id: 0,
          date: new Date().toISOString().substr(0, 10),
          type: 'Credit Card',
          charge: 0,
          deposit: 0,
          description: 'Hello World!'
        },
        {
          id: 1,
          date: 'Car',
          type: 'Credit Card',
          charge: 10,
          deposit: 0,
          description: 'Hello World!'
        },
        {
          id: 2,
          date: '123',
          type: 'Credit Card',
          charge: 0,
          deposit: 0,
          description: 'Hello World!'
        },
        {
          id: 3,
          date: '5adsg4t5s4dg5sdg',
          type: 'Credit Card',
          charge: 0,
          deposit: 0,
          description: 'Hello World!'
        }
      ]
    }
  },
  methods: {
    gotoMonth (i) {
      this.currentMonth += i
      if (this.currentMonth > 11) this.currentMonth = 0
      else if (this.currentMonth < 0) this.currentMonth = 11
    },
    gotoCurrentMonth () {
      this.currentMonth = new Date().getMonth()
    },
    expand (props) {
      if (props.item.notes === '' | !props.item.notes) return
      props.expanded = !props.expanded
    },
    deleteSelected () {
      this.transactions = _.difference(this.transactions, this.selected)
    }
  }
}
</script>

<style>

</style>
