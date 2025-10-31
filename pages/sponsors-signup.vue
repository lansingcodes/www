<template>
  <article class="lc-code-of-conduct">
    <page-heading
      heading="Become a Sponsor"
      subheading="Help our community grow!"
    />
    <section class="p-6 md:px-5 mb-16 max-w-xl mx-auto">
      <div>
        <h2 class="mb-2">Information About Sponsoring</h2>
        <div class="p-3">
          It costs money to maintain a thriving tech community: hosting costs,
          meetup fees, promotional material, equipment, food and drinks, etc.
          We're open to a variety of contributions to make supporting our events
          easy for you: one-time cash contributions, recurring cash
          contributions, event hosting, food and drinks. In return, we'll
          promote you or your organization on the Lansing Codes website, on
          relevant event pages, and give you a shout-out at the event.
        </div>
      </div>
      <div class="p-8 bg-blue block shadow-lg w-full rounded">
        <form action="https://formspree.io/f/xayagvjo" method="POST">
          <div class="form-row m-2">
            <label for="organization-name" class="text-white">
              Organization Name
            </label>
            <input
              id="organization-name"
              name="organization-name"
              type="text"
              class="rounded px-10"
            />
            <label for="organization-website" class="text-white ml-3">
              Organization Website
            </label>
            <input
              id="organization-website"
              name="organization-website"
              type="website"
              class="rounded px-10"
            />
          </div>
          <div class="form-row m-2">
            <label for="contact-name" class="text-white"> Contact Name </label>
            <input id="contact-name" type="text" class="rounded px-10" />
            <label for="contact-email" class="text-white ml-3">
              Contact Email
            </label>
            <input id="contact-email" type="email" class="rounded px-10" />
          </div>
          <div class="form-row m-2">
            <div class="text-white">How would you like to contribute?</div>
            <div class="form-row m-2">
              <div class="m-1">
                <input
                  id="monthly-lansing-codes"
                  v-model="showDescription"
                  value="monthly-lansing-codes"
                  type="radio"
                  name="contribute-options"
                />
                <label for="monthly-lansing-codes" class="text-white">
                  Monthly Contribution to Lansing Codes
                </label>
                <input
                  v-if="showDescription === 'monthly-lansing-codes'"
                  type="hidden"
                />
              </div>
              <div class="m-1">
                <input
                  id="one-time-lansing-codes"
                  v-model="showDescription"
                  value="one-time-lansing-codes"
                  type="radio"
                  name="contribute-options"
                />
                <label for="one-time-lansing-codes" class="text-white">
                  One-time contribution to Lansing Codes
                </label>
                <input
                  v-if="showDescription === 'one-time-lansing-codes'"
                  type="hidden"
                />
              </div>
              <div class="m-1">
                <input
                  id="monthly-specific-group"
                  v-model="showDescription"
                  value="monthly-specific-group"
                  type="radio"
                  name="contribute-options"
                />
                <label for="monthly-specific-group" class="text-white">
                  Monthly contribution to a particular group (specify event)
                </label>
                <input
                  v-if="showDescription === 'monthly-specific-group'"
                  id="monthly-specific-group-group"
                  name="monthly-specific-group-group"
                  type="text"
                  class="rounded px-10"
                  maxlength="30"
                />
              </div>
              <div class="m-1">
                <input
                  id="one-time-specific-group"
                  v-model="showDescription"
                  value="one-time-specific-group"
                  type="radio"
                  name="contribute-options"
                />
                <label for="one-time-specific-group" class="text-white">
                  One-time contribution to a particular group (specify event)
                </label>
                <input
                  v-if="showDescription === 'one-time-specific-group'"
                  id="one-time-specific-group-group"
                  name="one-time-specific-group-group"
                  type="text"
                  class="rounded px-10"
                />
              </div>
              <div class="m-1">
                <input
                  id="host-event"
                  v-model="showDescription"
                  value="host-event"
                  type="radio"
                  name="contribute-options"
                />
                <label for="host-event" class="text-white">
                  Host an event (offer space, A/V equipment, and drinks)
                  (specify event)
                </label>
                <input
                  v-if="showDescription === 'host-event'"
                  id="host-event-event"
                  name="host-event-event"
                  type="text"
                  class="rounded px-10"
                />
              </div>
              <div class="m-1">
                <input
                  id="provide-event"
                  v-model="showDescription"
                  value="provide-event"
                  type="radio"
                  name="contribute-options"
                />
                <label for="provide-event" class="text-white">
                  Provide food and drink for an event (specify event)
                </label>
                <input
                  v-if="showDescription === 'provide-event'"
                  id="provide-event-event"
                  name="provide-event-event"
                  type="text"
                  class="rounded px-10"
                />
              </div>
              <div class="m-1">
                <input
                  id="contribute-other"
                  v-model="showDescription"
                  value="contribute-other"
                  type="radio"
                  name="contribute-options"
                />
                <label for="contribute-other" class="text-white">
                  Other (please specify)
                </label>
                <input
                  v-if="showDescription === 'contribute-other'"
                  id="contribute-other-description"
                  name="contribute-other-description"
                  type="text"
                  class="rounded px-10"
                />
              </div>
            </div>
          </div>
          <div class="form-row m-2">
            <div class="text-white">Would you like to receive an invoice?</div>
            <div class="form-row m-2">
              <div class="m-1">
                <input
                  id="invoice-yes"
                  v-model="showContact"
                  value="invoice-yes"
                  type="radio"
                  name="invoice-options"
                />
                <label for="invoice-yes" class="text-white"> Yes </label>
                <label
                  v-if="showContact === 'invoice-yes'"
                  for="invoice-contact-name"
                  class="m-1 p-3 text-white"
                >
                  Contact Name
                </label>
                <input
                  v-if="showContact === 'invoice-yes'"
                  id="invoice-contact-name"
                  name="invoice-contact-name"
                  type="text"
                  class="rounded px-10"
                />
                <label
                  v-if="showContact === 'invoice-yes'"
                  for="invoice-contact-email"
                  class="m-1 p-3 text-white"
                >
                  Contact email
                </label>
                <input
                  v-if="showContact === 'invoice-yes'"
                  id="invoice-contact-email"
                  name="contact-email"
                  type="email"
                  class="rounded px-10"
                />
              </div>
              <div class="m-1">
                <input
                  id="invoice-no"
                  v-model="showContact"
                  value="invoice-no"
                  type="radio"
                  name="invoice-options"
                />
                <label for="invoice-no" class="text-white"> No </label>
                <input v-if="showContact === 'invoice-no'" type="hidden" />
                <div class="m-1 pl-3 text-white">
                  Send contributions via
                  <a
                    href="https://www.paypal.com/ncp/payment/V7UNAG9J544R2"
                    target="_blank"
                    class="text-grey-light no-underline"
                  >PayPal</a>
                  to Michigan Technology Network
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="outline-none bg-white border border-blue rounded text-blue p-4 mt-3 uppercase font-bold text-sm hover:text-blue-darker focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </section>
  </article>
</template>

<script>
import pageHeading from '~/components/page-heading'
import card from '~/components/card--figure'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    pageHeading,
  },
  data() {
    return {
      showDescription: 'hidden-1',
      showContact: 'invoice-no',
    }
  },
  methods: {
    toggleMonthlySpecGroup: (e) => {
      this.$refs.monthlySpecGroup.toggleAttribute('hidden')
    },
  },
}
</script>
